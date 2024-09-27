import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { TestService } from '../services/test-component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { JsonPipe } from '@angular/common';
import { debounce, debounceTime, fromEvent } from 'rxjs';


@Component({
  selector: 'test-component',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  providers: [],
  templateUrl: '../test-component/test-component.component.html',
  styleUrl: '../test-component/test-component.component.css'
})
export class TestComponentComponent implements AfterViewInit {
  // Interpolation
  interpolationDemo: string = "Interpolation work";

  // Event
  count: number = 0;
  handleClick() {
    this.count++;
  }

  // Property Binding
  clicked: boolean = false;
  disableAfterClick() {
    this.clicked = true;
  }

  // Service and Dependency Injection
  courses: string[] = ["course1", "course2", "course3"];
  serviceCourses: string[];

  constructor(service: TestService, public api: ApiService) {
    this.serviceCourses = service.getCourse();
  }

  // API
  data: any;
  getData() {
    this.api.fetchData().subscribe(
      (response: any) => {
        console.log(response);
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // Signal
  title = signal('');
  changeText(event: Event) {
    const title = (event.target as HTMLInputElement).value;
    this.title.set(title);
  }

  // Rxjs
  clickMessage: string = '';
  ngAfterViewInit() {
    const button = document.getElementById('clickButton');
    
    const clickObservable = fromEvent(button!, 'click');
    
    clickObservable.pipe(debounceTime(1500)).subscribe(() => this.clickMessage = "This message appears 1.5s after you click the button");
  }
}
