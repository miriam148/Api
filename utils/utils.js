const jwt = require('jsonwebtoken')

const generateToken = (payload, isRefreshToken) => {
    if (isRefreshToken) {
<<<<<<< HEAD
        return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { 
            expiresIn: '60min', 
        })

    }
    return jwt.sign(payload, process.env.JWT_SECRET, { 
=======
        return jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, { 
            expiresIn: '60min',
        })

    }
    return jwt.sign(payload, process.env.SECRET_TOKEN, { 
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69
        expiresIn: '15min',
    })
}

<<<<<<< HEAD

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


=======
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69
module.exports = { generateToken }