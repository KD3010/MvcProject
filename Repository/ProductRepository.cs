using MySql.Data.MySqlClient;
using Dapper;

using MvcProject.Models;
namespace MvcProject.Repository;

public class ProductRepository 
{
    public static string dbConnection = "server=localhost;port=3006;Database=products;uid=root;pwd=mysql@KD3010";
    static MySqlConnection connection = new MySqlConnection(dbConnection);

    // Creating unified string for multiple values in paramters
    public string ConcatString(string property) 
    {
        String[] arr = property.Split(",");
        for(int i = 0; i < arr.Count(); i++) 
        {
            arr[i] = "\"" + arr[i] + "\"";
        }
        string propertyNew = string.Join(", ", arr);
        return propertyNew;
    }

    // Builds the query that has to be run in database
    public string BuildQuery(string? brand, string? category, int? minPrice, int? maxPrice)
    {
        string query = "SELECT *, (SELECT GROUP_CONCAT(pim.ImageUrl SEPARATOR ', ') FROM productimage pim WHERE p.ProductID = pim.ProductID) as ProductImages FROM product p ";

        if(brand == null && category == null && minPrice == null && maxPrice == null)
        {
            return query;
        }
        else
        {
            query += "WHERE ";
        } 

        if(brand != null)
        {
            query = query + $" Brand IN ({brand})";
        }
        
        if(category != null)
        {
            if(brand != null) query += " AND";
            query = query + $" Category IN ({category})";
        }
        
        if(minPrice != null && maxPrice != null)
        {
            if(brand != null || category != null) query += " AND";  
            query = query + $" Price between {minPrice} AND {maxPrice}";
        }

        return query;
    } 

    public List<ProductModel> GetAllProducts(string? brand, string? category, int? minPrice, int? maxPrice) 
    {
        if(brand != null) brand = ConcatString(brand);
        if(category != null) category = ConcatString(category);

        string query = BuildQuery(brand, category, minPrice, maxPrice);

        var productData = connection.Query<ProductModel>(query);
        var products = productData.Select((obj, index) => new ProductModel{
            ProductID = obj.ProductID,
            title = obj.title,
            description = obj.description,
            brand = obj.brand,
            price = obj.price,
            category = obj.category,
            rating = obj.rating,
            discountPercentage = obj.discountPercentage,
            stock = obj.stock,
            thumbnail = obj.thumbnail,
            ProductImages = !string.IsNullOrEmpty(obj.ProductImages) ? obj.ProductImages.Split(", ") : null
        }).ToList<ProductModel>();

        return products;
    }
}

