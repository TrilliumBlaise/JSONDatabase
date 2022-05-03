export default class UserLoginAPI {
    static saveUserLogin(user) {
        const data = read();

        data.push(user);
        save(data);

        return user;
    }

    static deleteUserLogin(user) {
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

    static findAllUserLogins() {
        const users = read();
        if (!users) {
            return [];
        }

        return users;
    }

    static updateUserLogin(user) {
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
}

//format
//{username: 'string', password: 'string'}
function read() {
    const json = localStorage.getItem('userlogin');

    if (!json) {
        return [      
            
        ]
    }
    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem('userlogin', JSON.stringify(data))
}

