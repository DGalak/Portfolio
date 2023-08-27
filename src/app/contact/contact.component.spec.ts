import { TestBed } from "@angular/core/testing";
import { ContactComponent } from "./contact.component";
import { EmailJSResponseStatus } from "@emailjs/browser";

describe( 'Contact', () => {
    beforeEach(() => {
        declarations: [
            ContactComponent
        ]
    });
    it('should send the message',async() => {
        let fixture = TestBed.createComponent(ContactComponent);
        let app = fixture.debugElement.componentInstance;
        app.send().then((r:EmailJSResponseStatus) => { expect(r.status).toEqual(200)});
    })
});