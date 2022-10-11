namespace MvcProject.Models;
using System.ComponentModel.DataAnnotations;

public class ProductImage
{
    [Key]
    public int ImageID {get; set;}
    public int ProductID {get; set;}
    public string ImageUrl {get; set;}

}
