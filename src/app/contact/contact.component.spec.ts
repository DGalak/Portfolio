import { TestBed } from "@angular/core/testing";
import { ContactComponent } from "./contact.component";
import { EmailJSResponseStatus } from "@emailjs/browser";

describe( 'Contact', () => {
    beforeEach(() => {
        declarations: [
            ContactComponent
        ]
    });
    it('method send should be called', () => {
        let fixture = TestBed.createComponent(ContactComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.send()).toHaveBeenCalled;
    })
});