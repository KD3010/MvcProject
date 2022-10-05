using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MvcProject.Models;

namespace MvcProject.Controllers;

public class HomeController : Controller
{

    public string Index()
    {
        return "Welcome to home";
    }
}
