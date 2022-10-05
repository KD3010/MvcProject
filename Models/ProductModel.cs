using System.ComponentModel.DataAnnotations;

namespace MvcProject.Models;

public class ProductModel
{
    [Key]
    public int ProductID {get; set;}
    public string title {get; set;}
    public string description {get; set;}
    public int price {get; set;}
    public float discountPercentage {get; set;}
    public float rating {get; set;}
    public int stock {get; set;}
    public string brand {get; set;}
    public string category {get; set;}
    public string thumbnail {get; set;}
    public virtual ICollection<ProductImage> ProductImages {get; set;}

}
