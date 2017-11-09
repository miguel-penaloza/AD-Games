const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
let db;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*url of database: */
var url = 'mongodb://localhost:27017/';
/* --- */

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;

    initDatabase();

    app.listen(4000, function() {
        console.log('listening on 4000')

    })
})

function initDatabase() {
    initUsersCollection();
    initSkillsCollection();
    initOfficesCollection();
    initFoodsCollection();
}

function initUsersCollection() {
    db.collection('users', function(err, collection) {
        collection.remove({}, function(err, removed) {
        });
    });

    db.collection('users').insert([
        {
            id: 1,
            avatar: '/images/leobuezo.jpg',
            firstName: 'Leonardo',
            lastName: 'Buezo',
            emailAddress: 'leonardo.buezo@appdirect.com',
            slackUser: 'leonardo.buezo@appdirect.com',
            region: 'Buenos Aires',
            office: 'BA',
            team: [
                {
                    id: 1,
                    name: 'MP-RESELLER'
                }
            ],
            skills: [
                { id: 1, code: 'JAVA', name: 'Java', rating: 2 },
                { id: 2, code: 'JAVASCRIPT', name: 'Javascript', rating: 2 },
                { id: 3, code: 'SQL', name: 'SQL', rating: 4 }
            ]
        },
        {
            id: 2,
            avatar: '/images/florencia.jpg',
            firstName: 'Florencia',
            office: 'BA',
            lastName: 'Santos',
            emailAddress: 'florencia.santos@appdirect.com',
            slackUser: 'florencia.santos@appdirect.com',
            region: 'Buenos Aires',
            team: [
                {
                    id: 1,
                    name: 'MP-RESELLER'
                },
                {
                    id: 2,
                    name: 'QA-AUTOMATION'
                },
                {
                    id: 4,
                    name: 'PSFE'
                },
                {
                    id: 5,
                    name: 'MICROSOFT'
                }
            ],
            skills: [
                { id: 1, code: 'JAVA', name: 'Java', rating: 3 },
                { id: 2, code: 'AUTOMATION', name: 'Automation', rating: 1 },
                { id: 3, code: 'SQL', name: 'SQL', rating: 5 },
                { id: 3, code: 'RESELLER', name: 'Reseller', rating: 5 },
                { id: 7, code: 'CHIMPOKOMON', name: 'Chimpokomon', rating: 5 }
            ]
        },
        {
            id: 3,
            avatar: '/images/profilegoogle.jpg',
            firstName: 'Miguel',
            lastName: 'Angel',
            office: 'BA',
            emailAddress: 'miguel.penaloza@appdirect.com',
            slackUser: 'miguel.penaloza@appdirect.com',
            region: 'Buenos Aires',
            team: [
                {
                    id: 3,
                    name: 'PSO'
                }
            ],
            skills: [
                { id: 1, code: 'JAVA', name: 'Java', rating: 3 },
                { id: 2, code: 'JAVASCRIPT', name: 'Javascript', rating: 5 },
                { id: 3, code: 'SQL', name: 'SQL', rating: 2 }
            ]
        },
        {
            id: 4,
            avatar: '/images/damian.jpg',
            firstName: 'Damian',
            lastName: 'Musullini',
            office: 'BA',
            emailAddress: 'damian@appdirect.com',
            slackUser: 'damian@appdirect.com',
            region: 'Montreal',
            team: [
                {
                    id: 1,
                    name: 'MP-RESELLER'
                }
            ],
            skills: [
                { id: 1, code: 'JAVA', name: 'Java', rating: 2 },
                { id: 2, code: 'JAVASCRIPT', name: 'Javascript', rating: 5 },
                { id: 3, code: 'SQL', name: 'SQL', rating: 2 },
            ]
        }, {
            id: 6,
            avatar: '/images/benoit.png',
            firstName: 'Benoit',
            lastName: 'Roger',
            office: 'MU',
            emailAddress: 'benoit.roger@appdirect.com',
            slackUser: 'benoit.roger@appdirect.com',
            region: 'Munich',
            team: [
                {
                    id: 4,
                    name: 'PSMI'
                }
            ],
            skills: [
                { id: 1, code: 'JAVA', name: 'Java', rating: 4 },
                { id: 2, code: 'JAVASCRIPT', name: 'Javascript', rating: 3 },
                { id: 3, code: 'SQL', name: 'SQL', rating: 3 },
                { id: 5, code: 'REACTJS', name: 'React', rating: 2 },
                { id: 6, code: 'MONGODB', name: 'MongoDB', rating: 1 },
                { id: 8, code: 'PSMI', name: 'PSMI', rating: 4 }
            ]
        }, {
            id: 7,
            avatar: '/images/juan.jpe',
            firstName: 'Juan',
            lastName: 'Garcia',
            office: 'MT',
            emailAddress: 'juan.garcia@appdirect.com',
            slackUser: 'juan.garcia@appdirect.com',
            region: 'Montreal',
            team: [
                {
                    id: 4,
                    name: 'PSFE'
                }
            ],
            skills: [
                { id: 1, code: 'SAP', name: 'SAP', rating: 4 },
                { id: 2, code: 'JAVASCRIPT', name: 'Javascript', rating: 3 },
                { id: 3, code: 'DT', name: 'DT', rating: 3 },
                { id: 5, code: 'BACKBONE', name: 'Backbone', rating: 4 },
                { id: 6, code: 'UNITTEST', name: 'Unit Testing', rating: 3 },
                { id: 8, code: 'PSFE', name: 'PSFE', rating: 4 }
            ]
        }, {
            id: 8,
            avatar: '/images/perry.jpe',
            firstName: 'Perry',
            lastName: 'Wong',
            office: 'SF',
            emailAddress: 'perry.wong@appdirect.com',
            slackUser: 'perry.wong@appdirect.com',
            region: 'San Francisco',
            team: [
                {
                    id: 4,
                    name: 'PSFE'
                }
            ],
            skills: [
                { id: 1, code: 'SAP', name: 'SAP', rating: 4 },
                { id: 2, code: 'JAVASCRIPT', name: 'Javascript', rating: 3 },
                { id: 3, code: 'DT', name: 'DT', rating: 3 },
                { id: 3, code: 'CAMCON', name: 'Cancom', rating: 3 },
                { id: 3, code: 'VODAFONE', name: 'Vodafone', rating: 3 },
                { id: 3, code: 'TEMENOS', name: 'Temenos', rating: 3 },
                { id: 3, code: 'PCM', name: 'PCM', rating: 3 },
                { id: 3, code: 'BT', name: 'BT', rating: 3 },
                { id: 3, code: 'FRONTEND', name: 'Frontend', rating: 3 },
                { id: 3, code: 'SWISSCOM', name: 'Swisscom', rating: 3 },
                { id: 5, code: 'BACKBONE', name: 'Backbone', rating: 4 },
                { id: 6, code: 'UNITTEST', name: 'Unit Testing', rating: 3 },
                { id: 8, code: 'PSFE', name: 'PSFE', rating: 4 }
            ]
        }, {
            id: 9,
            avatar: '/images/profilegoogle.jpg',
            firstName: 'Huabin',
            lastName: 'Kuan',
            office: 'SF',
            emailAddress: 'huabin.kuan@appdirect.com',
            slackUser: 'huabin.kuan@appdirect.com',
            region: 'San Francisco',
            team: [
                {
                    id: 4,
                    name: 'Admin'
                }
            ],
            skills: [
                { id: 1, code: 'SAP', name: 'SAP', rating: 4 },
                { id: 3, code: 'DT', name: 'DT', rating: 3 },
                { id: 3, code: 'CAMCON', name: 'Cancom', rating: 3 },
                { id: 3, code: 'VODAFONE', name: 'Vodafone', rating: 3 },
                { id: 3, code: 'TEMENOS', name: 'Temenos', rating: 3 },
                { id: 3, code: 'PCM', name: 'PCM', rating: 3 },
                { id: 3, code: 'BT', name: 'BT', rating: 3 },
                { id: 3, code: 'QA', name: 'QA', rating: 3 },
                { id: 3, code: 'SWISSCOM', name: 'Swisscom', rating: 3 },
                { id: 5, code: 'REGRESSIONS', name: 'Regressions', rating: 4 },
                { id: 6, code: 'UNITTEST', name: 'Unit Testing', rating: 3 }
            ]
        }

    ]
        , function(err, result) {
            if (err != null) {
                console.log(err);
            } else {
                console.log("Inserted users collection.");
            }
        });
}

function initSkillsCollection() {
    db.collection('skills', function(err, collection) {
        collection.remove({}, function(err, removed) {
        });
    });
    db.collection('skills').insert([
        {
            id: 1,
            code: 'JAVA',
            name: 'Java'
        },
        {
            id: 2,
            code: 'JAVASCRIPT',
            name: 'Javascript'
        },
        {
            id: 3,
            code: 'SQL',
            name: 'SQL'
        },
        {
            id: 4,
            code: 'QAAUTO',
            name: 'QA-Automation'
        },
        {
            id: 5,
            code: 'REACTJS',
            name: 'React'
        },
        {
            id: 6,
            code: 'MONGODB',
            name: 'MongoDB'
        },
        {
            id: 7,
            code: 'CHIMPOKOMON',
            name: 'Chimpokomon'
        }
    ]
        , function(err, result) {
            if (err != null) {
                console.log(err);
            } else {
                console.log("Inserted skills collection.");
            }
        });
}

function initOfficesCollection() {
    db.collection('offices', function(err, collection) {
        collection.remove({}, function(err, removed) {
        });
    });
    db.collection('offices').insert([
        {
            id: "BA",
            position: {
                "top": "80%",
                "left": "32%"
            },
            name: "Buenos Aires",
            description: "The best office ever",
            address: 'Av. del Libertador 6350, 1428 CABA, Argentina',
            config: {
                timezone: 'America/Buenos_Aires',
                locale: 'en',
                styles: {
                    "positionClock": {
                        background: '#04678E',
                        'minWidth': '168px',
                        'maxWidth': '168px'
                    }
                }
            },
            events: [{
                id: 5,
                name: "Town Hall",
                date: "18-05-2017"
            }, {
                id: 234,
                name: "Revolutionary Day",
                date: "25-05-2017"
            }, {
                id: 45,
                name: "Town Hall",
                date: "05-06-2017"
            }, {
                id: 54,
                name: "Town Hall",
                date: "20-07-2017"
            }, {
                id: 3,
                name: "Maradona Birthdays",
                date: "30-10-2017"
            }, {
                id: 334,
                name: "Mate's Day",
                date: "30-01-2018"
            }, {
                id: 1,
                name: "Christmas",
                date: "25-12-2017"
            }, {
                id: 2,
                name: "New Year",
                date: "01-01-2018"
            }, {
                id: 4,
                name: "Mate's Day",
                date: "30-01-2018"
            }]
        },
        {
            id: "SF",
            position: {
                "top": "42%",
                "left": "17%"
            },
            name: "San Francisco",
            description: "Is where the money comes!",
            address: 'FL 25, 650 California St, San Francisco, CA 94108, Estados Unidos',
            config: {
                timezone: 'America/Los_Angeles',
                locale: 'en',
                styles: {
                    "positionClock": {
                        background: '#F44336',
                        'minWidth': '168px',
                        'maxWidth': '168px'
                    }
                }
            },
            events: [
                {
                    id: 3,
                    name: "Town Hall",
                    date: "18-05-2017"
                },
                {
                    id: 45,
                    name: "Town Hall",
                    date: "05-06-2017"
                }, {
                    id: 54,
                    name: "Town Hall",
                    date: "20-07-2017"
                }, {
                    id: 1,
                    name: "Black Friday",
                    date: "24-11-2017"
                }, {
                    id: 1,
                    name: "Christmas",
                    date: "25-12-2017"
                }, {
                    id: 2,
                    name: "New Year",
                    date: "01-01-2018"
                }]
        },
        {
            id: "PN",
            position: {
                "top": "50%",
                "left": "69%"
            },
            name: "Pune",
            description: "The dancing office",
            address: 'Nymphenburger Str. 4, 80335 München, Alemania',
            config: {
                timezone: 'Asia/Calcutta',
                locale: 'en',
                styles: {
                    "positionClock": {
                        background: '#9C27B0',
                        'minWidth': '168px',
                        'maxWidth': '168px'
                    }
                }
            },
            events: [
                {
                    id: 3,
                    name: "Town Hall",
                    date: "18-05-2017"
                },
                {
                    id: 45,
                    name: "Town Hall",
                    date: "05-06-2017"
                }, {
                    id: 54,
                    name: "Town Hall",
                    date: "20-07-2017"
                }, {
                    id: 1,
                    name: "Christmas",
                    date: "25-12-2017"
                }, {
                    id: 2,
                    name: "New Year",
                    date: "01-01-2018"
                }
            ]
        },
        {
            id: "MT",
            position: {
                "top": "37%",
                "left": "28%"
            },
            name: "Montreal",
            description: "The guys who loves curling",
            'address': '279 Prince St, Montreal, QC H3C 2N4, Canadá',
            config: {
                timezone: 'America/Montreal',
                locale: 'en',
                styles: {
                    "positionClock": {
                        background: '#2196F3',
                        'minWidth': '168px',
                        'maxWidth': '168px'
                    }
                }
            },
            events: [
                {
                    id: 30,
                    name: "Town Hall",
                    date: "18-05-2017"
                },
                {
                    id: 45,
                    name: "Town Hall",
                    date: "05-06-2017"
                }, {
                    id: 4,
                    name: "Canadian Day",
                    date: "01-07-2017"
                }, {
                    id: 54,
                    name: "Town Hall",
                    date: "20-07-2017"
                }, {
                    id: 1,
                    name: "Christmas",
                    date: "25-12-2017"
                }, {
                    id: 2,
                    name: "New Year",
                    date: "01-01-2018"
                }, {
                    id: 3,
                    name: "Curling Day",
                    date: "23-02-2018"
                }]
        }, {
            id: "MU",
            position: {
                "top": "36%",
                "left": "50%"
            },
            name: "Munich",
            description: "das kartoffel",
            address: 'Nymphenburger Str. 4, 80335 München, Alemania',
            config: {
                timezone: 'Europe/Berlin',
                locale: 'en',
                styles: {
                    "positionClock": {
                        background: '#D50000',
                        'minWidth': '168px',
                        'maxWidth': '168px'
                    }
                }
            },
            events: [{
                id: 3,
                name: "Town Hall",
                date: "18-05-2017"
            }, {
                id: 45,
                name: "Town Hall",
                date: "05-06-2017"
            }, {
                id: 4,
                name: "German Day",
                date: "01-07-2017"
            }, {
                id: 54,
                name: "Town Hall",
                date: "20-07-2017"
            }, {
                id: 1,
                name: "Christmas",
                date: "25-12-2017"
            }, {
                id: 2,
                name: "New Year",
                date: "01-01-2018"
            }]
        }
    ]
        , function(err, result) {
            if (err != null) {
                console.log(err);
            } else {
                console.log("Inserted offices collection.");
            }
        });
}
function initFoodsCollection() {
    db.collection('foods', function(err, collection) {
        collection.remove({}, function(err, removed) {
        });
    });
    db.collection('foods').insert([
        {
            id: 1,
            name: 'Chinesse',
            votes: 0
        }, {
            id: 2,
            name: 'Mexican',
            votes: 0
        }, {
            id: 3,
            name: 'Japanese',
            votes: 2
        }, {
            id: 4,
            name: 'Empanadas',
            votes: 15
        }, {
            id: 5,
            name: 'Arepa',
            votes: 2
        }, {
            id: 6,
            name: 'Fish & chips',
            votes: 4
        }, {
            id: 7,
            name: 'Camarones a la milanesa',
            votes: 10
        }
    ]
        , function(err, result) {
            if (err != null) {
                console.log(err);
            } else {
                console.log("Inserted foods collection.");
            }
        });
}

app.get('/users', (req, res) => {
    db.collection('users').find().toArray(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/skills', (req, res) => {
    db.collection('skills').find().toArray(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/users/v2/find', (req, res) => {
    let skillParams = req.query.skill;
    let nameParams = req.query.name;

    var skillsFilter = [];
    var namesFilter = [];

    let skillsQuery;
    let namesQuery;
    let query;

    if (skillParams instanceof Array) {
        skillParams.forEach(function(value) {
            let regex = new RegExp('^' + value + '$', "i");
            skillsFilter.push({ 'skills.name': regex });
        });
        skillsQuery = { $and: skillsFilter };
    } else if (skillParams) {
        let regex = new RegExp('^' + skillParams + '$', "i");
        skillsQuery = { 'skills.name': regex };
    }
    if (nameParams instanceof Array) {
        nameParams.forEach(function(value) {
            let regex = new RegExp('^' + value + '$', "i");
            namesFilter.push({ 'firstName': regex });
            namesFilter.push({ 'lastName': regex });
        });
        namesQuery = { $or: namesFilter };
    } else if (nameParams) {
        let regex = new RegExp('^' + nameParams + '$', "i");
        namesFilter.push({ 'firstName': regex });
        namesFilter.push({ 'lastName': regex });
        namesQuery = { $or: namesFilter };
    }

    if (namesQuery && skillsQuery) {
        query = { $and: [skillsQuery, namesQuery] };
    } else if (namesQuery) {
        query = namesQuery;
    } else if (skillsQuery) {
        query = skillsQuery;
    } else {
        return res.json();
    }
    db.collection('users').find(query).toArray(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/users/find', (req, res) => {
    let params = Object.keys(req.query);
    var filter = [];
    params.forEach(function(value) {
        let regex = new RegExp('^' + value + '$', "i")
        filter.push({ 'skills.name': regex });
    });
    let query = { $and: filter };
    db.collection('users').find(query).toArray(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

// Leo - Devuelve un documento del id solicitado.
app.get('/user/:id', (req, res) => {
    let mi_id = parseInt(req.params.id);
    db.collection('users').findOne({ id: mi_id }, function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/userByEmail/:email', (req, res) => {
    let email = req.params.email;
    db.collection('users').findOne({ emailAddress: email }, function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/offices', (req, res) => {
    db.collection('offices').find().toArray(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            if (data.length === 0) {
                initOfficesCollection();
            }
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/foods', (req, res) => {
    db.collection('foods').find().toArray(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

// Leo - con el Login se envía al backend un POST method para actualizar el documento del user logueado.
app.post('/user/get', (req, res) => {
    console.log('POST');
    console.log('Status Code: ', res.statusCode);
    console.log(req.body);
    var user_email = req.body.emailAddress;

    db.collection('users').find({ emailAddress: user_email }).toArray(function(err, data) {
        if (err) {
            console.log("Err...");
            console.log(err);
            return res.status(500);
        } else {
            console.log("Data...");

            db.collection('users').save({
                id: req.body.id,
                avatar: req.body.avatar,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                slackUser: req.body.slackUser,
                region: req.body.region,
                team: [{
                    id: req.body.team.id,
                    name: req.body.team.name
                }],
                skills: [
                    { id: req.body.skills.id, code: req.body.skills.code, name: req.body.skills.name, rating: req.body.skills.rating },
                ]
            }, function(err, data) {
                // Log de consola
                console.log("Insertado el registro en la colección.");
                //callback(docs);
            });

            return res.status(200);
        }
    })
})
