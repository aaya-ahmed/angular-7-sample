import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tcard } from '../../models/card';
import { CachService } from '../../services/cach/cach.service';
import { LoadingService } from '../../services/shared/loading.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: number = 0; // User ID from route
  userCard: Tcard = {
    id:0,
    title: '',
    body: '',
    image: '',
    subtitle: ''
  }; 
  errorMessage: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService,
    private cacheService: CachService
  ) {
    // Parse the user ID from the route
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    if (isNaN(this.id)) {
      this.errorMessage = 'Invalid user ID';
    }
  }

  ngOnInit(): void {
    this.getUserData();

    this.cacheService.cache.subscribe((res) => {
      if (res && res.data) {
        this.userCard = {
          body: "In a recent conversation with Artland Magazine, Lee Cavaliere, the newly appointed Artistic Director of VOLTA Art Fair, shared his fresh and innovative perspectives on the future of the art fair. Known for his dynamic career at Tate, Max Wigram Gallery, and beyond, Cavaliere brings a wealth of experience to VOLTA. His vision emphasizes inclusivity, accessibility, and the breaking down of traditional barriers within the art world.Lee Cavaliere’s journey in the art world has been shaped by his passion for making art accessible to all. Reflecting on his time at Tate, Cavaliere noted how traditional museum settings can sometimes feel intimidating for people from diverse backgrounds. “Even when you’re deeply involved in significant exhibitions, there’s sometimes a formality in these spaces that can feel intimidating to some visitors,” he shared. This insight has fueled his commitment to creating environments where everyone feels welcome.",
          image: res.data.avatar || '', 
          subtitle: res.data.email || '',
          title: `${res.data.first_name || ''} ${res.data.last_name || ''}`
        };
        this.loadingService.loading.next(false);
      } else {
        this.errorMessage = 'Error retrieving user data';
      }
    });
  }

  /**
   * Fetches user data from the service or cache.
   */
  getUserData(): void {
    if (!this.cacheService.isPublishData(`user-${this.id}`)) {
      const subscriber = this.userService.getById(this.id).subscribe({
        next: (res) => {
          if (res) {
            this.cacheService.set(`user-${this.id}`, res);
          } else {
            this.errorMessage = 'User not found';
          }
          subscriber.unsubscribe(); 
        },
        error: () => {
          this.errorMessage = 'Failed to fetch user data';
          this.loadingService.loading.next(false);
        }
      });
    }
  }

  /**
   * Navigates back to the user list.
   */
  goBack(): void {
    this.loadingService.loading.next(true);
    this.router.navigateByUrl('/users');
  }
}
