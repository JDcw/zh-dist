var storage = window.localStorage;

function doAnswer(key, value) {
    storage.setItem("q" + key, value);
}

/**
 * 清楚答题结果
 */
function clearQuestions() {
    for (var index = 1; index <= 12; index++) {
        storage.removeItem("q" + index);
    }
}

/**
 * 检测答题结果
 */
function checkQuestions() {
    var count = 0;
    for (var index = 1; index <= 12; index++) {
        if (storage.getItem("" + index) == storage.getItem("q" + index)) {
            count = count + 1;
        }
    }
    storage.setItem("result", count);
    return count;
}

function result() {
    var result = storage.getItem("result");
    clearQuestions();
    return result;
}

/**
 * 初始化正确结果
 */
function initAnswers() {
    storage.setItem('1', 'b');
    storage.setItem('1', 'b');
    storage.setItem('2', 'a');
    storage.setItem('3', 'c');
    storage.setItem('4', 'd');
    storage.setItem('5', 'a');
    storage.setItem('6', 'a');
    storage.setItem('7', 'a');
    storage.setItem('8', 'a');
    storage.setItem('9', 'b');
    storage.setItem('10', 'c');
    storage.setItem('11', 'c');
    storage.setItem('12', 'b');
}