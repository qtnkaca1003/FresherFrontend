import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../../hook";
const Dasboard = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userLg = useAppSelector((state) => state.addToken.userFb);
  useEffect(() => {
    if (userLg.name === "" && session === undefined) {
      router.push("/");
    } else if (userLg.name !== "") {
      router.push("/dashboard/dashboard");
    } else if (session === null) {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      {session !== null ? (
        <main>
          <div className="wapper__dashboard">
            <div className="wapper__dashboard__card">
              <h1 className="title">User Profile</h1>
              <div className="wapper__dashboard__card__image">
              
                <img
                // @ts-ignore
                  src={session?.user?.email}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <div className="wapper__dashboard__card__name">
                <h2>Name: {session?.user?.name}</h2>
              </div>

              <div className="wapper__dashboard__card__email">
                <h3>Email: {session?.user?.email}</h3>
              </div>
              <div className="wapper__dashboard__card__button">
                <button onClick={() => signOut()} className="btn_logout">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <div className="wapper__dashboard">
            <div className="wapper__dashboard__card">
              <h1 className="title">User Profile</h1>
              <div className="wapper__dashboard__card__image">
                <img
                  width={100}
                  height={100}
                  src="../images/avatar.png"
                  alt="Avatar"
                />
              </div>
              <div className="wapper__dashboard__card__name">
                <h2>Name: {userLg.name}</h2>
              </div>
              <div className="wapper__dashboard__card__email">
                <h3>Email: {userLg.email}</h3>
              </div>
              <div className="wapper__dashboard__card__button">
                <button onClick={() => signOut()} className="btn_logout">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Dasboard;
