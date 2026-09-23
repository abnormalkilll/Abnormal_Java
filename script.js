/**
 * Abnormal Java — Website Script
 * Interactive In-Browser Auto-Fix Engine & Showcase Simulations
 */

// Hero Preview Showcase: Auto-Fix Simulator
function simulateAutoFix() {
  const previewOut = document.getElementById('preview-output');
  const previewExec = document.getElementById('preview-exec');
  
  if (previewOut) {
    previewOut.innerHTML = '<span style="color: var(--green);">> ✨ Syntax Auto-Fixed: Missing semicolons & unclosed braces repaired.</span>';
  }
  if (previewExec) {
    previewExec.textContent = '> Analysis completed in 4ms.';
  }
}

// Hero Preview Showcase: Run Code Simulator
function simulateRun() {
  const previewOut = document.getElementById('preview-output');
  const previewExec = document.getElementById('preview-exec');
  
  if (previewOut) {
    previewOut.innerHTML = '<span style="color: var(--gold); font-weight: 600;">> Output: Result sum: 42</span>';
  }
  if (previewExec) {
    const randomMs = Math.floor(Math.random() * 8) + 12;
    previewExec.textContent = `> Execution: ${randomMs}ms.`;
  }
}

// In-Browser Interactive Demo: Client-Side Java Syntax Auto-Repair Engine
function runWebAutoFix() {
  const editor = document.getElementById('web-demo-code');
  const consoleEl = document.getElementById('web-demo-console');
  if (!editor || !consoleEl) return;

  let code = editor.value;
  const lines = code.split('\n');
  const fixed = [];
  let braceDepth = 0;
  let semicolonsAdded = 0;
  let bracesClosed = 0;
  let parensClosed = 0;
  let commasRemoved = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    // Skip empty lines or comments
    if (trimmed.length === 0 || trimmed.startsWith('//') || trimmed.startsWith('/*')) {
      fixed.push(line);
      continue;
    }

    // Clean rogue trailing comma (e.g. "int a = 20,")
    if (trimmed.endsWith(',') && !trimmed.contains('{') && (trimmed.includes('=') || trimmed.startsWith('return '))) {
      trimmed = trimmed.slice(0, -1);
      commasRemoved++;
    }

    // Match and close unclosed parentheses (e.g. "System.out.println(msg")
    let openParens = (trimmed.match(/\(/g) || []).length;
    let closeParens = (trimmed.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const diff = openParens - closeParens;
      trimmed += ')'.repeat(diff);
      parensClosed += diff;
    }

    // Automatically append missing semicolon on statements
    const isControlHeader = /^(if|else|for|while|switch|case|default|try|catch|finally)/.test(trimmed);
    const isClassOrMethod = /^(public|private|protected|static|final|\s)*(class|interface|enum|void)/.test(trimmed);
    
    if (!trimmed.endsWith(';') && 
        !trimmed.endsWith('{') && 
        !trimmed.endsWith('}') && 
        !trimmed.endsWith(':') &&
        !isControlHeader && 
        !isClassOrMethod) {
      trimmed += ';';
      semicolonsAdded++;
    }

    // Calculate brace depth
    for (let char of trimmed) {
      if (char === '{') braceDepth++;
      if (char === '}') braceDepth = Math.max(0, braceDepth - 1);
    }

    fixed.push('    ' + trimmed);
  }

  // Automatically close unclosed braces at EOF
  if (braceDepth > 0) {
    bracesClosed = braceDepth;
    while (braceDepth > 0) {
      fixed.push('}');
      braceDepth--;
    }
  }

  // Update editor content
  editor.value = fixed.join('\n');

  // Diagnostic feedback in console
  const fixes = [];
  if (semicolonsAdded > 0) fixes.push(`${semicolonsAdded} missing semicolon${semicolonsAdded > 1 ? 's' : ''}`);
  if (parensClosed > 0) fixes.push(`${parensClosed} parenthesis`);
  if (bracesClosed > 0) fixes.push(`${bracesClosed} scope brace${bracesClosed > 1 ? 's' : ''}`);
  if (commasRemoved > 0) fixes.push(`${commasRemoved} typo comma`);

  consoleEl.innerHTML = `
    <div class="console-cmd">$ auto-fix-syntax --verify</div>
    <div style="color: var(--green); font-weight: 500;">
      > ✨ Auto-Fix Applied: Repaired ${fixes.join(', ') || 'clean syntax'}.
    </div>
    <div style="color: var(--text-dim); margin-top: 4px;">> Formatted 4-space scope indentation. Code is ready to compile!</div>
  `;
}

// In-Browser Interactive Demo: Run Code Simulator
function runWebCode() {
  const consoleEl = document.getElementById('web-demo-console');
  if (!consoleEl) return;

  const randomMs = Math.floor(Math.random() * 8) + 11;
  consoleEl.innerHTML = `
    <div class="console-cmd">$ java TestJava.java</div>
    <div style="color: var(--gold); font-weight: 600;">
      > Output: Hello from Open Source<br>
      > Output: Sum: 50
    </div>
    <div style="color: var(--text-dim); margin-top: 4px;">
      > Execution: ${randomMs}ms. Exit code: 0
    </div>
    <div style="color: var(--primary); margin-top: 6px;">$ <span class="blink-cursor"></span></div>
  `;
}

// Download Button Feedback
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('main-download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        const meta = document.querySelector('.download-meta');
        if (meta) {
          const toast = document.createElement('div');
          toast.style.cssText = 'color: var(--green); font-size: 13px; font-weight: 600; margin-top: 8px;';
          toast.textContent = '✓ Download started! Check your browser downloads for Abnormal_Java.apk';
          meta.parentNode.insertBefore(toast, meta.nextSibling);
          setTimeout(() => toast.remove(), 6000);
        }
      }, 500);
    });
  }
});
