const assert = require('assert');
const app = require("../app");
// const app1 = require("../app");
const TEST_TIMEOUT = 50000;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU3VuIEF1ZyAwNyAyMDIyIDAwOjMyOjI3IEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKSIsInVzZXJJZCI6IjYyZWVkZTY0ZmNkODNiMGRjMDM1YWIzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5ODI1MTQ3fQ.W0KyKgsvn1LD8ZMVHNYzhlF12ov1Qvu-LZ2PZYdhmhM"

describe("test", () => {
    it("1 Negative: It should not post with out the required fields", async (done) => {
        console.log("coming here")
        const facility = {
            first_name: "facilityId",
            last_name: "test",
        };
        console.log(app.route)
        const response = await request(app)
            .post("/movies")
            .send(facility)
            .set("Authorization", `bearer ${token}`);
            console.log(response)
        expect(response.status).toEqual(400);
        done();
        },
        TEST_TIMEOUT
    );
})