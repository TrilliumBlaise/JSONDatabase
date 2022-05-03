export default class UserAPI {
    
    static saveUser(user) {
        const data = read();

        data.push(user);
        save(data);

        return user;
    }

    static updateUser(user) {
        const data = read();
        const index = (() => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].username !== user.username) {
                    continue;
                }
                return data.indexOf(data[i]);
            }
        })();
        
        data.splice(index, 1, user);
        save(data);

        return user;
    }

    static findUsers() {
        const users = read();

        if (!users) {
            return [];
        }

        return users;
    }

    static deleteUser(user) {
        const data = read()
        const index = (() => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].username !== user.username) {
                    continue;
                }
                return data.indexOf(data[i]);
            }
        })();

        data.splice(index, 1);
        save(data);

        return user;
    }
}

//Structure
/*{
    username: "string", 
    accAmount: "number", 
    paycheck: "object", 
    bills: "array of objects"
}*/
function read() {
    const json = localStorage.getItem('user');

    if (!json) {
        return [      
            
        ]
    }
    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem('user', JSON.stringify(data))
}