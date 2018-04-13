using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

public class TodoController : Controller
{
    private readonly ILogger _logger;

    public TodoController(
        ILogger<TodoController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public JsonResult GetAll()
    {
        _logger.BeginScope("Message {HoleValue}", DateTime.Now);
        return new JsonResult("Hello world!");
    }
}