let smartphones = new Map();

smartphones.set("Samsung", "reliable");
smartphones.set("iPhone", "cool");
smartphones.set("Nokia", "old");
smartphones.set("Huawei", "cheap");

alert(smartphones.size);

smartphones.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});
