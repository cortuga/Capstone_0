FROM microsoft/dotnet:2.2-sdk
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet sdg-react-template.dll


# had to the CMD on line 4. Had to add "react" after sdg and before react