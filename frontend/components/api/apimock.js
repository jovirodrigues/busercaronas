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
    carona(text){
        return mockasync({
     
            id: 1000,
            author_name: logged_user.username,
            author_avatar: 'https://newslab.com.br/wp-content/uploads/2018/08/pato-960x720',
            horario_at: '18h 30',
            info: text,    
        })
    },

    list_caronas(){
        return mockasync([
            {
              id: 1,
              author_name: 'Batata',
              author_avatar: 'https://thumbs.dreamstime.com/b/polegar-bonito-dos-desenhos-animados-da-batata-acima-33232984.jpg',
              horario_at: '18h 30',
              info: 'Carona saindo da buser - sentido horta da zaléia',
            },
            {
              id: 2,
              author_name: 'Beterraba',
              author_avatar:'http://cdn5.colorir.com/desenhos/color/201635/beterraba-1-comida-verduras-1291140.jpg',
              horario_at: '18h 00',
              info: 'Carona saindo da buser - sentido horti-fruti',
            },
            {
              id: 3,
              author_name:'Oranjo',
              author_avatar: 'laranja].jpg',
              horario_at: '12h 00',
              info: 'Carona saindo do bairro das laranjeiras - sentido buser',
            }
        ])
    }
};

export default api;
