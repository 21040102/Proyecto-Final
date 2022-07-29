process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

if (process.env.NODE_ENV === "dev") {
    process.env.URLDB = "mongodb+srv://user5a:GF8TaI1UH6ZsyUWr@cluster0.slgur.mongodb.net/utm21040102-projectofinal?retryWrites=true&w=majority";
} else {
    process.env.URLDB = "mongodb+srv://user5a:GF8TaI1UH6ZsyUWr@cluster0.slgur.mongodb.net/utm21040102-projectofinal?retryWrites=true&w=majority";
}

