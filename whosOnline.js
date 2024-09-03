// done, https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript
    
    let friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 1
    }, {
    username: 'Lucy', 
    status: 'online',
    lastActivity: 1
    }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 1
    }]


const whosOnline = (friends) => {
    if(friends.length===0) {
        return {};
    }

    let result = {
        online: [],
        offline:[],
        away:[]
    }

    for (let i = 0; i < friends.length; i++) {
        if(friends[i].status === 'offline') {
            result.offline.push(friends[i].username);
        } else if(friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            result.online.push(friends[i].username);
        } else {
            result.away.push(friends[i].username);
        }
    }

    if(result.online.length===0) {
        delete result.online;
    }
    if(result.offline.length===0) {
        delete result.offline;
    }
    if(result.away.length===0) {
        delete result.away;
    }

    return result;
}

console.log(whosOnline(friends));