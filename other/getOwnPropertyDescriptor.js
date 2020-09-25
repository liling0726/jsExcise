o = { getfoo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo").get;
console.log(d)
