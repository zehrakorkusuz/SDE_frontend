import React, { useState } from 'react';

function WelcomePage() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleTextSubmit
