using MySql.Data.MySqlClient;
using Dapper;
using System.Text.Json;

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
        for(int i = 0; i < arr.Count(); i++) {
            arr[i] = "\"" + arr[i] + "\"";
        }
        string propertyNew = string.Join(", ", arr);
        return propertyNew;
    }

    // Builds the query that has to be run in database
    public string BuildQuery(string? brand, string? category, int? minPrice, int? maxPrice)
    {
        string query = "SELECT *, (SELECT JSON_ARRAYAGG(pim.ImageUrl) FROM productimage pim WHERE p.ProductID = pim.ProductID) as ProductImages FROM product p ";

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

        return productData.ToList();
    }
}

