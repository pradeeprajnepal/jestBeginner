const functions = require("./functions");

//toBe
test("2 + 2 is added to equal 4",()=>{
    expect(functions.add(2,2)).toBe(4);
});

//toBe
test("2 + 2 is added to NOT equal 5",()=>{
    expect(functions.add(2,2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSY VALUES 
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false`

// toBeFalsy
test("Should be falsy",()=>{
    expect(functions.checkVAlue()).toBeFalsy();
});

//toBeNull
test('should be null',()=>{
    expect(functions.isNull()).toBeNull();
})

//toEqual
test('User should be Pradeep Nepal Object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName:'Pradeep',
        lastName: 'Nepal'
    });
});

//Less than and greater than
test('Should be under 1600',()=>{
    const load1 = 800;
    const load2 = 800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team",()=>{
    expect('team').not.toMatch(/I/i );
});

//Arrays
test('Admin should be usernames',()=>{
    usernames= ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

//Install Axios

//Working with async data
test("user fetched name should be Leanne Graham", ()=>{
    expect.assertions(1);
    return functions.fetchUser()
    .then (data =>{
        expect (data.name).toEqual('Leanne Graham');
    })
})