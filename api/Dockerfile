FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app/api

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore api.csproj
# Build and publish a release
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app/api
COPY --from=build-env /app/api/out .
EXPOSE 3080
ENTRYPOINT ["dotnet", "api.dll"]