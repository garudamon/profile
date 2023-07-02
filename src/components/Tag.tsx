type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <span className="text-xs border border-gray-300 bg-gray-200 rounded-lg py-1 px-2 dark:bg-gray-900 dark:border-gray-800">
      {text}
    </span>
  );
};

export default Tag;
