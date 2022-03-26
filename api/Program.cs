using SampleFS.Startup;

var builder = WebApplication.CreateBuilder(args)
    .UseStartup<Startup>();