const User = require('../models/User.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


// creation user
const signup = async (req, res, next) => {
    try {
        const dataBody = req.body
        if (dataBody.password.length < 8) {
            return res.status(405).json({ message: "Mots de passe trop court" })
        }
            const passwordHash = await bcrypt.hash(dataBody.password, 10)
            const newUser = await User.create({
                firstName: dataBody.firstName,
                lastName: dataBody.lastName,
                email: dataBody.email,
                password: passwordHash
            })
            res.status(200).json({ message: `Utilisateur ${newUser.firstName} ${newUser.lastName} créé!` })
        
    } catch (error) {
        res.status(500).json({ error })
    }
}

//connexion user 
const login = async (req, res, next) => {
    try {
        const dataBody = req.body
        const user = await User.findOne({ email: dataBody.email })
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
        }
        try {
            const valid = await bcrypt.compare(dataBody.password, user.password)
            if (!valid) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
            }
        } catch (error) {
            res.status(500).json({ error })
        }

        res.status(200).json({
            userId: user._id,
            success: true,
            message: "Utilisateur connecté avec succès",
            token: jwt.sign(
                { userId: user._id },
                process.env.TOKEN_KEY,
                { expiresIn: '24h' }
            )
        });
    } catch (error) {
        exports.login = (req, res, next) => {
            User.findOne({ email: req.body.email })
                .then(user => {
                    if (!user) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    bcrypt.compare(req.body.password, user.password)
                        .then(valid => {
                            if (!valid) {
                                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                            }
                            res.status(200).json({
                                userId: user._id,
                                success: false,
                                message: error.errot_message,
                                token: 'TOKEN'
                            });
                        })
                        .catch(error => res.status(500).json({ error }));
                })
                .catch(error => res.status(500).json({ error }));
        };
    }

}
module.exports = {
    signup,
    login
}