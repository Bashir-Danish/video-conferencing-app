import { auth, clerkMiddleware  ,createRouteMatcher} from "@clerk/nextjs/server";

 
const protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
])
export default clerkMiddleware((auth,req) => {
  if (protectedRoutes(req)) auth().protect()
});
 
// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};