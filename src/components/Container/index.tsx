type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-300 min-h-screen dark:bg-slate-900 dark:text-slate-300">
      <div className="max-w-5x1 mx-auto px-8">{children}</div>
    </div>
  );
}
