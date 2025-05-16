interface TransitionButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const TransitionButton = ({ title, isActive, onClick }: TransitionButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={getButtonStyles(isActive)}>
      {title}
    </button>
  )
}

function getButtonStyles(isActive: boolean) {
  if (isActive) {
    return {
      backgroundColor: '#262626',
      color: 'white'
    }
  }

  return {
    backgroundColor: 'white',
    color: 'black'
  }
}

export default TransitionButton;