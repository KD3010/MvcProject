using MySql.Data.MySqlClient;
using Dapper;

namespace MvcProject.Repository;

public class ProductRepository 
{
    public static string dbConnection = "server=localhost;port=3006;Database=products;uid=root;pwd=mysql@KD3010";

    static MySqlConnection connection = new MySqlConnection(dbConnection);
    public List<dynamic> GetAllProducts(string? brand, string? category, int? minPrice, int? maxPrice) 
    {
        string query = "SELECT * FROM product";

        if(brand != null)
        {
            query = query + $" WHERE Brand IN (\'{brand}\')";
            if(category != null)
            {
                query = query + $" AND Category IN (\'{category}\')";
            }
            if(minPrice != null && maxPrice != null)
            {
                query = query + $" AND Price between {minPrice} AND {maxPrice}";
            }
        } else if(category != null)
        {
            query = query + $" WHERE Category IN (\'{category}\')";
            if(minPrice != null && maxPrice != null)
            {
                query = query + $" AND Price between {minPrice} AND {maxPrice}";
            }
        } else if(minPrice != null && maxPrice != null)
        {
            query = query + $" WHERE Price between {minPrice} AND {maxPrice}";
        }

        return connection.Query<dynamic>(query).ToList();
    }
}

