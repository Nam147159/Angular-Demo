import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TestService {
    getCourse() {
        return ["course4", "course5", "course6"];
    }
}