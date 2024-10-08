import classes from "./ContentWrapper.module.css";

export const ContentWrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={classes.contentWrapper}>
      {children}
    </div>
  );
}

export const ContentHeader = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={classes.contentHeader}>
      {children}
    </div>
  );
}

export const ContentBody = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={classes.contentBody}>
      {children}
    </div>
  );
}
