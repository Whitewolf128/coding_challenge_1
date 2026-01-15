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

let id: number[] = [1,2,3];
let name: string[] = ["ShadowStrike", "NoobMaster", "ProGamer99"];
let wins: number[] = [15, 3, 0];
let losses: number[] = [5,12, 0];
let totalScore: number[] = [28500, 4200, 0];
app.get("/api/v1/players", (req, res) =>{
    res.json({
        id,
        name,
        wins,
        losses,
        totalScore,
    })
});

app.get("/api/v1/players/:id", (req, res) =>{
    res.json({
        id: 1,
        name: "ShadowStrike",
        wins: 15,
        losses: 5,
        totalScore: 28500,
    })
});
    const totalGames1 = wins[0] + losses[0];
    const totalGames2 = wins[1] + losses[1];
    const totalGames3 = wins[2] + losses[2];

    let rating1 = (wins[0] /  totalGames1) * 100 + (totalScore[0] / totalGames1);
    let rating2 = (wins[1] / totalGames2) * 100 + (totalScore[1] / totalGames2);
    let rating3 = (wins[2] / totalGames3) * 100 + (totalScore[2] / totalGames3);
app.get("/api/v1/players/:id/rating", (req,res) =>{
    res.json({
       rating1: (wins[0] /  totalGames1) * 100 + (totalScore[0] / totalGames1),
       rating2: (wins[1] /  totalGames2) * 100 + (totalScore[1] / totalGames2),
       rating3: (wins[2] /  totalGames3) * 100 + (totalScore[2] / totalGames3)
    })
});


export default app;