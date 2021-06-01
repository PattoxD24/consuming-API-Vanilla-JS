// Fuctions

const onlyunique = (value, index, self) => {
    return self.indexOf(value) === index;
};

const addClassName = (ele, name) => {
    arr = ele.className.split(" ");
    if (arr.indexOf(name) == -1) {
        ele.className += " " + name;
    }
};
