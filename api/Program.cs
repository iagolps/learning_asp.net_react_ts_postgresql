using api.Startup;

var builder = WebApplication.CreateBuilder(args)
    .UseStartup<Startup>();