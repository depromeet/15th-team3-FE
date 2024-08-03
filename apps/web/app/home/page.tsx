// import { DialogContextProvider } from '@/common/contexts/DialogProvider';
// import { NotificationContainer } from '@/home/features/notification/containers/NotificationContainer';
// import { TopPreviousQuestionListContainer } from '@/home/features/previous-question/containers/TopPreviousQuestionListContainer';
// import { ProgressingQuestionContainer } from '@/home/features/progressing-question/containers/ProgressingQuestionContainer';
import { HomeScreen } from '@sambad/web-domains/home';

export default HomeScreen;

// export default async function HomeScreen() {
//   return (
//     <DialogContextProvider>
//       <ProgressingQuestionContainer />
//       <TopPreviousQuestionListContainer />
//       <NotificationContainer />
//     </DialogContextProvider>
//   );
// }

// export default HomeScreen (){
//     // const { queryClient } = await getServerSideProps({ meetingId: '1' });

//     return (
//       // <></>
//       // <HydrationBoundary state={dehydrate(queryClient)}>
//       <DialogContextProvider>
//         <>
//           <ProgressingQuestionContainer />
//           {/* <TopPreviousQuestionListContainer /> */}
//           {/* <GatherMemberProfileListContainer /> */}
//           {/* <FloatingButtonContainer /> */}
//           {/* <NotificationContainer />  */}
//         </>
//       </DialogContextProvider>
//       // </HydrationBoundary>
//     );
//   };
