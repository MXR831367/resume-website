using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace MXR.Function
{
    public class ResumeCounter
    {
        private readonly ILogger<ResumeCounter> _logger;

        public ResumeCounter(ILogger<ResumeCounter> logger)
        {
            _logger = logger;
        }

        [Function("ResumeCounter")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult("Welcome to Azure Functions!");
        }
    }
}
