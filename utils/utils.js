const jwt = require('jsonwebtoken')

const generateToken = (payload, isRefreshToken) => {
    if (isRefreshToken) {
        return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { 
            expiresIn: '60min', 
        })

    }
    return jwt.sign(payload, process.env.JWT_SECRET, { 
        expiresIn: '15min',
    })
}


// const generateToken = (user, isRefreshToken) => {
//     console.log(" Datos del usuario al generar token:", user)
//     const payload = { _id: user._id.toString(), name: user.name, role: user.role }
//     if (isRefreshToken) {
//         return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { 
//             expiresIn: '60min', 
//         })

//     }
//     return jwt.sign(payload, process.env.JWT_SECRET, { 
//         expiresIn: '15min',
//     })
// }


module.exports = { generateToken }