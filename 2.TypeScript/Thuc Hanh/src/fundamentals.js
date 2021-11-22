(function main() {
    console.log("START");
    if (true) {
        var lang = "vi";
        var target_1 = "en-us";
        console.log("inside block");
        console.log(target_1);
    }
    console.log(lang);
    var target;
    console.log(target);
})();
// Expect: lỗi xảy ra (TS2304: Cannot find name 'target'.)
// ============================================
(function main() {
    var x = 5;
    console.log(x);
    var x = 10;
    console.log(x);
    var y = 55;
    console.log(y);
    var y = 100;
    console.log(y);
})();
// Expect: lỗi xảy ra (TS2451: Cannot redeclare block-scoped variable 'y'.)
// ============================================
(function main() {
    console.log(x);
    var x = 5;
    var y = 10;
    console.log(y);
    // let y = 10;
})();
// Expect: lỗi xảy ra (TS2448: Block-scoped variable 'y' used before its declaration.)
//
//
// ============================================
(function main() {
    var message;
    var total = 100;
    var isProduction = true;
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    var now = new Date();
    var unknown;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    ;
    function log(msg) {
        console.log(msg);
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    var post = {
        id: "", title: ""
    };
    // message = 50;
    message = "A";
    function getPost(postId) {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        };
    }
})();
// Expect: lỗi xảy ra
// TS2322: Type '{}' is not assignable to type 'IPost'. Property 'id' is missing in type '{}'.
//     TS2322: Type '50' is not assignable to type 'string'.
