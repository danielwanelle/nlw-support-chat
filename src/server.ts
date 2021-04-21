import express from "express"; //sintaxe nova, substitui o const require

const app = express();
app.use(
    express.urlencoded({
        extended: true
    })
)

/**
 * Rotas
 */
app.get("/", (request, response) => {
    return response.json({
        message: "Olá mundo!"
    });
});

app.post("/user", (request, response) => {
    const name = request.body.name;
    console.log(name);
    return response.json({
        message: "Usuário " + name + " cadastrado!"
    });
});

app.listen(3333, () => {
    console.log("Server is running on port 3333");
})