import { Component, inject } from '@angular/core';
import { ToastService } from './toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  toastService = inject(ToastService)
}
