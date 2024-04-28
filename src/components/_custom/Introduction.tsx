const Introduction = () => {
  return (
    <div className='flex flex-col gap-4 text-muted-foreground'>
      <div className='flex'>
        <h2 className='text-3xl font-bold text-primary'>
          Let's estimate the story points for this issue
        </h2>
      </div>

      <p>To determine the story points we evaluate 3 factors:</p>
      <ul className='list-disc list-inside'>
        <li>
          <span className='font-bold'>Complexity</span> - how big is the issue
        </li>
        <li>
          <span className='font-bold'>Uncertainty</span> - lack of context
          and/or clarity
        </li>
        <li>
          <span className='font-bold'>Effort</span> - how hard it is to solve
        </li>
      </ul>
      <p>
        Based on your knowledge of the problem select the approximate value for
        each question.
      </p>
    </div>
  );
};

export default Introduction;
