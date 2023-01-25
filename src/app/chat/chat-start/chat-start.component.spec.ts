
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebSocketService } from './web-socket.service';

import { ChatStartComponent } from './chat-start.component';

describe('ChatStartComponent', () => {
  let component: ChatStartComponent;
  let fixture: ComponentFixture<ChatStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatStartComponent ],
      imports: [HttpClientModule],
      providers: [WebSocketService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
