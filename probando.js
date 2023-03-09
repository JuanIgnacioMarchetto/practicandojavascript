const gente=[
    {
        nombre:"juan",
        apellido:"perez",
        edad:23,
        curso:"pintura",
    },
    {
        nombre:"joe",
        apellido:"lore",
        edad:20,
        curso:"ceramica",
    },
    {
        nombre:"jivan",
        apellido:"lopez",
        edad:24,
        curso:"pintura",
    },
    {
        nombre:"juan",
        apellido:"perez",
        edad:23,
        curso:"pasteleria",
    },
    {
        nombre:"inez",
        apellido:"gomes",
        edad:19,
        curso:"pintura",
    },
    {
        nombre:"inez",
        apellido:"gomes",
        edad:22,
        curso:"ceramica",
    }
]

const result = gente.map(({nombre,apellido,edad})=>({
    alumno: '${nombre} ${apellido}', edad
}))
.filter(alumno=>alumno.edad>22)
.sort((a, b) => a.edad - b.edad)
.reduce((total, alumno)=>total+ alumno.edad,0)

console.log(result)