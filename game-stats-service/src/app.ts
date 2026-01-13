import express, { Express } from "express";

const app: Express = express();

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/players", (req, res) =>{
    res.json({
        id: Number,
        name: String,
        wins: Number,
        losses: Number,
        totalScore: Number,
    })
});


export default app;