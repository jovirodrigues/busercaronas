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
                slack: 'zuckzin',
                whats: '000000000',
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

    get_user_details(username){
        const avatar = {
          'Batata': 'https://thumbs.dreamstime.com/b/polegar-bonito-dos-desenhos-animados-da-batata-acima-33232984.jpg',
          'Beterraba':'http://cdn5.colorir.com/desenhos/color/201635/beterraba-1-comida-verduras-1291140.jpg' ,
          'Oranjo': 'https://w7.pngwing.com/pngs/106/832/png-transparent-orange-cartoon-cartoon-orange-face-orange-smiley.png',
          'Brócolis': 'https://image.freepik.com/vetores-gratis/personagem-de-desenho-animado-de-brocolis-feliz_120675-96.jpg',
          'Repolho': 'https://ae01.alicdn.com/kf/HTB12XBeah1YBuNjy1zcq6zNcXXaM/Venda-quente-Dos-Desenhos-Animados-Repolho-Roxo-Planta-Verde-Tapete-Capachos-Tapetes-Quarto-Decora-o-Da.jpg_960x960.jpg'
        }[username]
        return mockasync({
            username: username,
            avatar: avatar,
            last_tweet: 'Penso, logo existo',
            ifollow: true
        })
    },

    carona(origem, destino, vaga, horas){
        return mockasync({
            id: 1000,
            author_name: logged_user.username,
            author_avatar: 'https://img.icons8.com/color/452/avatar.png',
            horario_at: horas,
            vagas: vaga,
            origem: origem,
            destino:  destino 
        })
    },

    list_caronas(username){

        return mockasync([
            {
              id: 1,
              author_name: username || 'Batata',
              author_avatar: 'https://thumbs.dreamstime.com/b/polegar-bonito-dos-desenhos-animados-da-batata-acima-33232984.jpg',
              horario_at: '18h 30',
              vagas: 4,
              origem: 'Buser',
              destino: 'Horti-Fruti'
            },
            {
              id: 2,
              author_name: username || 'Beterraba',
              author_avatar:'http://cdn5.colorir.com/desenhos/color/201635/beterraba-1-comida-verduras-1291140.jpg',
              horario_at: '18h 00',
              vagas: 2,
              origem: 'Buser',
              destino: 'Campo dos Alemães'
            },
            {
              id: 3,
              author_name: username ||'Oranjo',
              author_avatar: 'https://w7.pngwing.com/pngs/106/832/png-transparent-orange-cartoon-cartoon-orange-face-orange-smiley.png',
              horario_at: '9h 30',
              vagas: 4,
              origem: 'Zona Sul',
              destino: 'Buser'
            },
            {
              id: 4,
              author_name: username || 'Brócolis',
              author_avatar:'https://image.freepik.com/vetores-gratis/personagem-de-desenho-animado-de-brocolis-feliz_120675-96.jpg',
              horario_at: '18h 00',
              vagas: 1,
              origem: 'Buser',
              destino: 'Zona-Leste : Novo Horizonte'
            },
            {
              id: 5,
              author_name: username || 'Repolho',
              author_avatar:'https://ae01.alicdn.com/kf/HTB12XBeah1YBuNjy1zcq6zNcXXaM/Venda-quente-Dos-Desenhos-Animados-Repolho-Roxo-Planta-Verde-Tapete-Capachos-Tapetes-Quarto-Decora-o-Da.jpg_960x960.jpg',
              horario_at: '16h 00',
              vagas: 2,
              origem: 'Buser',
              destino: 'Horta'
            },
        ])
    },

    cadastrar (userData) {
        cadastrados.push(userData)
        return mockasync(userData)
    }
};

let cadastrados = []
export default api;
