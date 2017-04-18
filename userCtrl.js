const users = require('./users.js');

module.exports = {
        readAll(){
          return users.find();
        },

        findUserById(id){
          console.log(id);
        return users.findOne('id', 2);
        },

        getAdmins(){

          return users.find('type', 'admin')
        },

        getNonAdmins(){

          return users.find('type', 'user')
        },


        getUsersByFavorite(favorite){
          let favs = [];
          for(let i in users){
            if(users[i].favorites == favorite){
              favs.push(users[i])
            }
          }
          return favs
        },

        getUsersByAgeLimit(age){
          console.log(age);
          let aged = [];
          for(let i in users){
            if(users[i].age < age){
              aged.push(users[i]);
            }
          }
          return aged
        },

        findUserByQuery(prop, value){

          return users.find(prop, value);
        },

        createUser(result){
          return users.add(result);
    },

        updateUser(id, obj){
console.log(id);

          return users.update('id', 2, {first_name: 'foo'});
        },

        removeUser(id){
          users.findOne('id',1)
              return users.remove('id', 1);
        }

}
