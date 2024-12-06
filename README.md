# 1. Users Page (UsersComponent)
Description:
The Users page displays a list of users with basic information like their name, email, and avatar in card format. Users can be paginated, and upon clicking on a card, they are navigated to the respective user details page.

Key Features:
Displays a list of users with paginated results.
Uses cards for displaying user information (name, email, avatar).
Click on a card to navigate to the user's details page.
Caching is used for performance optimization.
Displays a loading indicator while fetching data.
Template (users.component.html):
html
Copy code
<mat-card *ngFor="let user of users.data" class="card-container">
  <app-vertical-card
    [card]="{
      id: user.id,
      title: user.first_name,
      subtitle: user.email,
      body: '',
      image: user.avatar
    }"
    (click)="goToDetails(user.id)">
  </app-vertical-card>
</mat-card>

<mat-paginator
  [length]="users?.total"
  [pageSizeOptions]="[users.per_page]"
  aria-label="Select page"
  (page)="getUsers($event.pageIndex + 1)">
</mat-paginator>
Key Variables:
users: usersListResponce:
Holds the list of users data.
users.data: Array of user objects.
users.total: Total number of users.
users.page, users.per_page, users.total_pages: Pagination data.
Methods:
ngOnInit():
Calls the getUsers() method to fetch the users for the first page.
Subscribes to cache updates from CachService.
getUsers(pageNumber: number):
Fetches the paginated list of users using UserService.
Uses cache to prevent redundant API calls.
goToDetails(id: number):
Navigates to the user details page (/user/{id}).
Services:
UserService: Used to fetch the paginated list of users from the backend.
CachService: Caches the fetched data for improved performance.
LoadingService: Controls the loading state for the page.
# 2. User Details Page (UserDetailsComponent)
Description:
The User Details page displays detailed information about a specific user. It shows data such as the user's name, email, avatar, and more. The user information is fetched by the user ID, either from cache or by making an API request.

Key Features:
Displays detailed information about a user (name, email, avatar, etc.).
Uses a card layout to present the user's information.
The page supports caching of user data for better performance.
Displays a loading progress bar while fetching data.
Template (user-details.component.html):
html
Copy code
<div class="card-container">
  <app-horizontal-card [card]="userCard" [goBackUrl]="'/users'"></app-horizontal-card>
</div>
<ng-template #data></ng-template>
Key Variables:
id: number: Holds the user ID fetched from the route parameter (/user/{id}).
userCard: Tcard: Contains the user data (name, email, avatar, etc.) to be displayed in the card format.
errorMessage: string: Stores any error messages related to data fetching.
Methods:
ngOnInit():
Fetches user data using the getUserData() method.
Subscribes to cached user data using CachService for quick display.
If the data is cached, updates the userCard object with user details.
getUserData():
Makes an API call to fetch user data if not present in cache.
If the data is successfully fetched, it is stored in cache for future use.
Displays an error message if the user data is not found or an API call fails.
goBack():
Navigates back to the users list page (/users).
Services:
UserService: Used to fetch the user details by ID from the backend.
CachService: Caches the fetched user data to avoid redundant API calls.
LoadingService: Controls the loading state (displays the progress bar).
#3. Custom Directives:
Color Directive (ColorDirective)
This directive dynamically sets the background color of an element based on the id passed to it.

Directive Code (color.directive.ts):
typescript
Copy code
@Directive({
  selector: '[custom-backgroundColor]'
})
export class ColorDirective {
  @Input('custom-backgroundColor') id: number;

  constructor(private eleRef: ElementRef) {}

  ngAfterViewInit() {
    const hexValue = ((this.id || 0) * 477).toString(14) + 'a2';
    this.eleRef.nativeElement.style.background = '#' + hexValue.padStart(6, '0').slice(0, 6);
  }
}
Usage in the Template:
html
Copy code
<mat-card-header custom-backgroundColor={{card.id}}>
  <div mat-card-avatar class="header-image">
    <img mat-card-image [src]="card.image" [alt]="'photo-' + card.title">
  </div>
</mat-card-header>
Explanation:
The custom-backgroundColor directive calculates a hex color value based on the provided id and applies it as the background color of the associated element (e.g., the header of the card).
# Conclusion:
The Users and User Details pages work together to display a list of users and their individual details. The caching mechanism ensures faster loading times by storing previously fetched data. The UserDetailsComponent fetches and displays detailed user information, while the UsersComponent displays a paginated list of users. Additionally, Angular Material components like mat-card, mat-paginator, and mat-progress-bar are used to enhance the UI.
