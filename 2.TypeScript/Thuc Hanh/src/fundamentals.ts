(function main() {
    console.log("START");
    if (true) {
        var lang = "vi";
        let target = "en-us";
        console.log("inside block");
        console.log(target);
    }
    console.log(lang);
    let target;
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
    let y = 10;
    console.log(y);
    // let y = 10;
})();

// Expect: lỗi xảy ra (TS2448: Block-scoped variable 'y' used before its declaration.)
//
//
// ============================================
(function main() {
    let message: string;
    let total: number = 100;
    let isProduction = true;
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    let now = new Date();
    let unknown: any;

    enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    };

    function log(msg: string): void {
        console.log(msg)
    }

    interface IPost {
        id: string;
        title: string;
        body?: string;
    }

    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';

    const post: IPost = {
        id: "", title: ""

    };
    // message = 50;
    message = "A";

    function getPost(postId: string): IPost {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        } as IPost;
    }
})();
// Expect: lỗi xảy ra
// TS2322: Type '{}' is not assignable to type 'IPost'. Property 'id' is missing in type '{}'.
//     TS2322: Type '50' is not assignable to type 'string'.