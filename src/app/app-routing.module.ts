import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'interior-chat',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  {
    path: 'interior-chat/:chat_id',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  { 
    path: 'interior-chat/:id_chat/:nombre_chat/:ultimo_mensaje', 
    //canActivate: [AuthGuard], 
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'test-plugins',
    loadChildren: () => import('./pages/test-plugins/test-plugins.module').then( m => m.TestPluginsPageModule)
  },
  {
    path: 'photo-crop',
    loadChildren: () => import('./pages/utils/photo-crop/photo-crop.module').then( m => m.PhotoCropPageModule)
  },
  {
    path: 'image-view',
    loadChildren: () => import('./pages/utils/image-view/image-view.module').then( m => m.ImageViewPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'eulas',
    loadChildren: () => import('./pages/eulas/eulas.module').then( m => m.EulasPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'huella',
    loadChildren: () => import('./pages/huella/huella.module').then( m => m.HuellaPageModule)
  },
  {
    path: 'create-time-list',
    loadChildren: () => import('./pages/create-time-list/create-time-list.module').then( m => m.CreateTimeListPageModule)
  },
  {
    path: 'create-time-list2',
    loadChildren: () => import('./pages/create-time-list2/create-time-list2.module').then( m => m.CreateTimeList2PageModule)
  },
  {
    path: 'connect-contacts',
    loadChildren: () => import('./pages/connect-contacts/connect-contacts.module').then( m => m.ConnectContactsPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  
  {
    path: 'time-list',
    loadChildren: () => import('./pages/time-list/time-list.module').then( m => m.TimeListPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'audiochat',
    loadChildren: () => import('./pages/audiochat/audiochat.module').then( m => m.AudiochatPageModule)
  },
  {
    path: 'chat-audio-no-playback',
    loadChildren: () => import('./pages/chat-audio-no-playback/chat-audio-no-playback.module').then( m => m.ChatAudioNoPlaybackPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'content-config',
    loadChildren: () => import('./pages/content-config/content-config.module').then( m => m.ContentConfigPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./pages/help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'adult-verification',
    loadChildren: () => import('./pages/adult-verification/adult-verification.module').then( m => m.AdultVerificationPageModule)
  },
  {
    path: 'dni-verification',
    loadChildren: () => import('./pages/dni-verification/dni-verification.module').then( m => m.DniVerificationPageModule)
  },
  {
    path: 'insignia',
    loadChildren: () => import('./pages/insignia/insignia.module').then( m => m.InsigniaPageModule)
  },
  {
    path: 'search-timelist',
    loadChildren: () => import('./pages/search-timelist/search-timelist.module').then( m => m.SearchTimelistPageModule)
  },
  
  {
    path: 'timelist-selection',
    loadChildren: () => import('./pages/timelist-selection/timelist-selection.module').then( m => m.TimelistSelectionPageModule)
  },  {
    path: 'prueba-slide',
    loadChildren: () => import('./pages/prueba-slide/prueba-slide.module').then( m => m.PruebaSlidePageModule)
  },
  {
    path: 'my-timelists',
    loadChildren: () => import('./pages/my-timelists/my-timelists.module').then( m => m.MyTimelistsPageModule)
  },
  {
    path: 'my-audios',
    loadChildren: () => import('./pages/my-audios/my-audios.module').then( m => m.MyAudiosPageModule)
  },
  {
    path: 'play-audio',
    loadChildren: () => import('./pages/play-audio/play-audio.module').then( m => m.PlayAudioPageModule)
  },
  {
    path: 'audios',
    loadChildren: () => import('./pages/audios/audios.module').then( m => m.AudiosPageModule)
  },
  {
    path: 'play-audio-comments',
    loadChildren: () => import('./pages/play-audio-comments/play-audio-comments.module').then( m => m.PlayAudioCommentsPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'fans',
    loadChildren: () => import('./pages/fans/fans.module').then( m => m.FansPageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./pages/following/following.module').then( m => m.FollowingPageModule)
  },
  {
    path: 'following-user',
    loadChildren: () => import('./pages/following-user/following-user.module').then( m => m.FollowingUserPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'user-profile-contact',
    loadChildren: () => import('./pages/user-profile-contact/user-profile-contact.module').then( m => m.UserProfileContactPageModule)
  },
  {
    path: 'user-profile-chat',
    loadChildren: () => import('./pages/user-profile-chat/user-profile-chat.module').then( m => m.UserProfileChatPageModule)
  },
  {
    path: 'search-contact',
    loadChildren: () => import('./pages/search-contact/search-contact.module').then( m => m.SearchContactPageModule)
  },
  {
    path: 'chat-audio-no-playback-2',
    loadChildren: () => import('./pages/chat-audio-no-playback-2/chat-audio-no-playback-2.module').then( m => m.ChatAudioNoPlayback2PageModule)
  },
  {
    path: 'favourite-audios',
    loadChildren: () => import('./pages/favourite-audios/favourite-audios.module').then( m => m.FavouriteAudiosPageModule)
  },
  {
    path: 'get-insignia',
    loadChildren: () => import('./pages/get-insignia/get-insignia.module').then( m => m.GetInsigniaPageModule)
  },
  {
    path: 'recovery-code',
    loadChildren: () => import('./pages/recovery-code/recovery-code.module').then( m => m.RecoveryCodePageModule)
  },



  
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
