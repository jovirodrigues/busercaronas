import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },

    list_caronas(){
        return mockasync([
            {
              id: 1,
              author_name: 'Batata',
              author_avatar: 'https://thumbs.dreamstime.com/b/polegar-bonito-dos-desenhos-animados-da-batata-acima-33233393.jpg',
              horario_at: '18h 30',
              info: 'Carona saindo da buser - sentido horta da zaléia',
            },
            {
              id: 2,
              author_name: 'Beterraba',
              author_avatar: 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
              horario_at: '18h 00',
              info: 'Carona saindo da buser - sentido horti-fruti',
            },
            {
              id: 3,
              author_name:'Oranjo',
              author_avatar: 'https://tv.i.uol.com.br/televisao/2011/11/18/annoying-orange-vai-virar-animacao-do-cartoon-network-1321641156778_300x300.jpg',
              horario_at: '12h 00',
              info: 'Carona saindo do bairro das laranjeiras - sentido buser',
            }
        ])
    }
};

export default api;
